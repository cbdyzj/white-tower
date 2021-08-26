package app.btyd.dto;

import lombok.Builder;

import java.util.Date;

public record UserDTO(
        Integer id,
        String username,
        String email,
        String avatarUrl,
        Date lastActiveTime,
        Date creationTime
) {
    @Builder
    public UserDTO {
    }
}
