package app.btyd.model;

import java.util.Date;

public record User(
        Integer id,
        String username,
        String email,
        String avatarUrl,
        Date lastActiveTime,
        Date creationTime
) {
}
