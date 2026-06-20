package com.macarts.basicdemo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

import static com.macarts.basicdemo.ErrorMessages.DB_START_ERROR;
import static com.macarts.basicdemo.InfoMessages.DB_START_OK;

@SpringBootApplication
@Slf4j
public class BasicDemoApplication {

	@Autowired
	Environment environment;

    @Autowired
    private DataSource dataSource;

    public static void main(String[] args) {
		SpringApplication.run(BasicDemoApplication.class, args);
	}

    @Bean
    public CommandLineRunner pingDatabase() {
        return args -> {
            try (Connection connection = dataSource.getConnection()) {
                if (connection.isValid(5))
                    LogHelper.printPrettyLog(DB_START_OK);
                else
                    LogHelper.printErrorLog(DB_START_ERROR);
            } catch (SQLException e) {
                System.err.println("Error checking database connection: " + e.getMessage());
                LogHelper.printErrorLog(DB_START_ERROR);
            }
        };
    }

	@Bean
	public CommandLineRunner releaseNotes() {
		return args -> {
			String serverStarted = "Server started at localhost:" + environment.getProperty("server.port");
			LogHelper.printPrettyLog(serverStarted);
		};
	}
}
