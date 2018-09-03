package com.selecao.decora.api;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.selecao.decora.model.User;
import com.selecao.decora.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/v1/users")
public class UserAPI {

	private final UserService userRepository;

    public UserAPI(UserService userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createUser(@Valid @RequestBody User user) throws Exception {
        userRepository.createUser(user);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/{id}")
    public void updateUser(@Valid @RequestBody User user) throws Exception {
    	userRepository.updateUser(user);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<User> getAllUsers() throws Exception {
    	return userRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value="/{id}")
    public User getUserById(@PathVariable String id) throws Exception {
        return userRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/{id}")
    public void deleteUser(@PathVariable String id) throws Exception {
    	userRepository.deleteById(id);
    }

}
