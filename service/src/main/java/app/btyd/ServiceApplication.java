package app.btyd;

import app.btyd.security.AuthenticationInterceptor;
import org.jetbrains.annotations.NotNull;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(proxyBeanMethods = false)
public class ServiceApplication implements ApplicationContextAware, WebMvcConfigurer {

    private ApplicationContext context;

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }

    @Override
    public void addInterceptors(@NotNull InterceptorRegistry registry) {
        registry.addInterceptor(context.getBean(AuthenticationInterceptor.class)).addPathPatterns("/api/**");
    }

    @Override
    public void setApplicationContext(@NotNull ApplicationContext context) {
        this.context = context;
    }
}
