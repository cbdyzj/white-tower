package app.btyd.dto;

import lombok.Builder;

public record TopicCreateDTO(
        String title,
        String content,
        String nodeCode
) {

    @Builder
    public TopicCreateDTO {
    }
}
