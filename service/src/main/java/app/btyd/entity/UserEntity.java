package app.btyd.entity;

import java.sql.Timestamp;

public record UserEntity(
        Integer id,
        String username,
        String email,
        String avatarUrl,
        Timestamp lastActiveTime,
        Timestamp creationTime
) {
}
