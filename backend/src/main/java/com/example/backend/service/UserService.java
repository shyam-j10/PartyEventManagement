// package com.example.backend.service;

// import org.springframework.http.HttpEntity;
// import org.springframework.http.HttpHeaders;
// import org.springframework.http.MediaType;
// import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;

// import com.example.backend.repository.UserRepo;
// // import com.example.backend.dto.FeedbackRequest;
// import com.example.backend.dto.UserRequest;
// import com.example.backend.model.User;
// import com.example.backend.repository.UserRepo;
// // import com.example.back.service.vo.Feedback;

// import lombok.RequiredArgsConstructor;
// import lombok.extern.slf4j.Slf4j;

// @Service
// @RequiredArgsConstructor
// @Slf4j
// public class UserService {
// 	private final UserRepo userRepository;
	
// 	private final RestTemplate restTemplate;

// 	public void addUserFeedback(com.example.backend.dto.UserRequest userRequest) {
// 		var user = User.builder().name(userRequest.getName()).email(userRequest.getEmail()).build();
// 		// var feedback = FeedbackRequest.builder().email(userRequest.getEmail()).feedback(userRequest.getFeedback()).build();
// 		userRepository.save(user);
// 		// HttpHeaders headers = new HttpHeaders();
// 		// headers.setContentType(MediaType.APPLICATION_JSON);
// 		// HttpEntity<FeedbackRequest> requestEntity = new HttpEntity<>(feedback, headers);
// 		// restTemplate.postForObject("http://FEEDBACK-SERVICE/api/v1/feed/addFeedback", requestEntity, Feedback.class);
// 	}
// }