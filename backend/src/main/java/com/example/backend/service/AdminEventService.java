package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.AdminEvent;
import com.example.backend.repository.AdminEventRepo;

@Service
public class AdminEventService {
    @Autowired
    AdminEventRepo repo;

    public boolean addEvent(AdminEvent event) {
		repo.save(event);
		return true;
	}

    public List<AdminEvent> getAllEvents(){
        return repo.findAll();
    }

    public Optional<AdminEvent> getEventById(int id){
        return repo.findById(id);
    }

    public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }

    public AdminEvent updateEvent(AdminEvent event, int id) {
		AdminEvent model=repo.findById(id).get();
		model.setAid(event.getAid());
		model.setLink(event.getLink());
		model.setPeop(event.getPeop());
		model.setTime(event.getTime());
		model.setType(event.getType());
        model.setDes(event.getDes());
		
		repo.save(model);
		return model;
	};
}
