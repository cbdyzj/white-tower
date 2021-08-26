package app.btyd.entity;

import lombok.Builder;

public record NodeEntity(
        Integer id,
        String code,
        String name
) {

    @Builder
    public NodeEntity {
    }
}
