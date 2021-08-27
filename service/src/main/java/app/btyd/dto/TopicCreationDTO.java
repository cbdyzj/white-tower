package app.btyd.dto;

import lombok.Builder;

public record TopicCreationDTO(
        String title,
        String content,
        String nodeCode
) {

    @Builder
    public TopicCreationDTO {
    }
}
