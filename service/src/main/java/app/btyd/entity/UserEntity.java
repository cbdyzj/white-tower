package app.btyd.entity;

import lombok.Builder;

import java.sql.Timestamp;

public record UserEntity(
        Integer id,
        String username,
        String email,
        String avatarUrl,
        Timestamp lastActiveTime,
        Timestamp creationTime
) {

    @Builder
    public UserEntity {
    }
}
