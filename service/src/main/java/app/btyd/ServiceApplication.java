package app.btyd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(proxyBeanMethods = false)
public class ServiceApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }
}
