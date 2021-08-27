package app.btyd.service;

import app.btyd.common.LimitOffset;
import app.btyd.dto.TopicCreationDTO;
import app.btyd.dto.TopicDTO;
import app.btyd.dto.TopicItemDTO;
import app.btyd.entity.TopicEntity;
import app.btyd.repository.NodeRepository;
import app.btyd.repository.TopicRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.function.Function;

@Service
public class TopicService {

    private final TopicRepository topicRepository;
    private final NodeRepository nodeRepository;

    public TopicService(TopicRepository topicRepository, NodeRepository nodeRepository) {
        this.topicRepository = topicRepository;
        this.nodeRepository = nodeRepository;
    }

    public List<TopicItemDTO> getTopicItemList(Integer pageIndex, Integer pageSize) {
        var limitOffset = new LimitOffset(pageSize, (pageIndex - 1) * pageSize);
        var topicList = this.topicRepository.selectTopicList(limitOffset);
        return topicList.stream().map(mapToTopicItemDTO()).toList();
    }

    @Transactional
    public TopicDTO createTopic(TopicCreationDTO creationDTO) {
        var node = this.nodeRepository.selectNode(creationDTO.nodeCode());
        var topic = TopicEntity.builder()
                .nodeId(node.id())
                .postUserId(1)
                .title(creationDTO.title())
                .content(creationDTO.content())
                .build();
        var topicId = this.topicRepository.insertTopic(topic);
        return TopicDTO.builder()
                .id(topicId)
                .title(creationDTO.title())
                .content(creationDTO.content())
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
