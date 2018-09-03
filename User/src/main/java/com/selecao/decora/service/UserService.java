package com.selecao.decora.service;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.UpdateOptions;
import com.selecao.decora.model.ProfileEnum;
import com.selecao.decora.model.User;

@Service
public class UserService {

//	@Autowired
//	private WebSecurityConfig webSecurityConfig;
//	@Autowired
//	JwtTokenUtil jwtTokenUtil;

	MongoClient mongo;
	MongoDatabase database;
	MongoCollection<Document> collection;
	Bson filter = null;
	Bson query = null;

	public UserService() {
		mongo = new MongoClient("localhost", 27017);
		database = mongo.getDatabase("decora");
		collection = database.getCollection("user");
	}

	public void createUser(User user) throws Exception {
		Document document = new Document();
		document.put("name", user.getName());
		document.put("email", user.getEmail());
		document.put("password", user.getPassword());
		document.put("address", user.getAddress());
		document.put("phone", user.getPhone());
		document.put("profile", ProfileEnum.ADMIN.toString().equals(user.getProfile().toString()) ? ProfileEnum.ADMIN.toString() : ProfileEnum.USER.toString());
		collection.insertOne(document);
	}

	public void updateUser(User user) throws Exception {
		Document document = new Document();
		document.put("_id", new ObjectId(user.getId()));
		document.put("name", user.getName());
		document.put("email", user.getEmail());
		document.put("password", user.getPassword());
		document.put("address", user.getAddress());
		document.put("phone", user.getPhone());
		document.put("profile", ProfileEnum.ADMIN.toString().equals(user.getProfile().toString()) ? ProfileEnum.ADMIN.toString() : ProfileEnum.USER.toString());
		collection.replaceOne(
				Filters.eq("_id", new ObjectId(user.getId())),
		        document,
		        new UpdateOptions().upsert(true));
	}

	public void deleteById(String _id) throws Exception {
		collection.deleteOne(new Document("_id", new ObjectId(_id)));
	}

	public User findById(String _id) throws Exception {
		Document document = collection.find(Filters.eq("_id", new ObjectId(_id))).first();
		BasicDBObject basicDBObject = new BasicDBObject(document);
		return converterToContato(basicDBObject);
	}

	public User findByEmail(String email) throws Exception {
		Document document = collection.find(Filters.eq("email", new ObjectId(email))).first();
		BasicDBObject basicDBObject = new BasicDBObject(document);
		return converterToContato(basicDBObject);
	}

	public User findByEmailWhithoutToken(String email) {
		Document document = collection.find(Filters.eq("email", new ObjectId(email))).first();
		BasicDBObject basicDBObject = new BasicDBObject(document);
		return converterToContato(basicDBObject);
	}

	public List<User> findAll() throws Exception {
		FindIterable<Document> users = collection.find();
		List<User> listUsers = new ArrayList<>();
		for (Document document : users) {
			BasicDBObject basicDBObject = new BasicDBObject(document);
			listUsers.add(converterToContato(basicDBObject));
		}
		return listUsers;
	}

	public User converterToContato(DBObject dbo) {
		User user = new User();
		user.setId(dbo.get("_id").toString());
		user.setName(dbo.get("name").toString());
		user.setEmail(dbo.get("email").toString());
		user.setPassword(dbo.get("password").toString());
		user.setAddress(dbo.get("address").toString());
		user.setPhone(dbo.get("phone").toString());
		if(dbo.get("profile") != null) {
			user.setProfile(ProfileEnum.ADMIN.toString().equals(dbo.get("profile").toString()) ? ProfileEnum.ADMIN : ProfileEnum.USER);
		}

        return user;
    }

//	private void verifyProfileAdmin(String token) throws Exception {
//		String email = jwtTokenUtil.getUsernameFromToken(token);
//    	User userLogado = findByEmail(email, token);
//    	if(userLogado.getProfile() != ProfileEnum.ADMIN) {
//    		throw new AccessDeniedException("Usuário sem permissão de acesso!");
//    	}
//	}
//
//	private void verifyIsAutheticated(String token) throws Exception {
//		if(StringUtils.isBlank(token) && jwtTokenUtil.canTokenBeRefreshed(token)) {
//    		throw new AccessDeniedException("Necessário estar logado!");
//    	}
//	}

}
