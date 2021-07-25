package app.btyd.service;

import app.btyd.entity.User;
import app.btyd.model.UserDTO;
import app.btyd.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getUserList(Integer pageIndex, Integer pageSize) {
        Objects.requireNonNull(pageIndex);
        Objects.requireNonNull(pageSize);
        var userList = this.userRepository.selectUserList(pageSize, (pageIndex - 1) * pageSize);
        return userList.stream().map(UserService::mapToUserDTO).toList();
    }

    public Integer getUserCount() {
        return this.userRepository.selectUserCount();
    }

    private static UserDTO mapToUserDTO(User user) {
        var userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setAvatarUrl(user.getAvatarUrl());
        userDTO.setLastActiveTime(user.getLastActiveTime());
        userDTO.setCreationTime(user.getCreationTime());
        return userDTO;
    }
}
