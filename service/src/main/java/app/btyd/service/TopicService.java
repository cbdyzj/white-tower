package app.btyd.service;

import app.btyd.common.LimitOffset;
import app.btyd.dto.TopicCreateDTO;
import app.btyd.dto.TopicDTO;
import app.btyd.dto.TopicItemDTO;
import app.btyd.entity.TopicEntity;
import app.btyd.repository.TopicRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;

@Service
public class TopicService {

    private final TopicRepository topicRepository;

    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<TopicItemDTO> getTopicItemList(Integer pageIndex, Integer pageSize) {
        var limitOffset = new LimitOffset(pageSize, (pageIndex - 1) * pageSize);
        var topicList = this.topicRepository.selectTopicList(limitOffset);
        return topicList.stream().map(mapToTopicItemDTO()).toList();
    }

    public TopicDTO createTopic(TopicCreateDTO topicCreateDTO) {
        var topic = TopicEntity.builder()
                .nodeId(0)
                .postUserId(0)
                .title(topicCreateDTO.title())
                .content(topicCreateDTO.content())
                .build();
        var topicId = this.topicRepository.insertTopic(topic);
        return TopicDTO.builder()
                .id(topicId)
                .build();
    }

    private static Function<TopicEntity, TopicItemDTO> mapToTopicItemDTO() {
        return (topic) -> {
            //
            return TopicItemDTO.builder()
                    .id(topic.id())
                    .title(topic.title())
                    .updatedTime(topic.updatedTime())
                    .build();
        };
    }

    public TopicDTO getTopic(Integer id) {
        return TopicDTO.builder()
                .id(id)
                .build();
    }
}
