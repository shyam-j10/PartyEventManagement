package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Venue;
import com.example.backend.repository.VenueRepo;

@Service
public class VenueService {
    @Autowired
    VenueRepo repo;

    public boolean addVenue(Venue venue) {
		repo.save(venue);
		return true;
	}

    public List<Venue> getAllVenues(){
        return repo.findAll();
    }

    public Optional<Venue> getVenueById(int id){
        return repo.findById(id);
    }

    public boolean deleteById(int id){
        repo.deleteById(id);
        return true;
    }
}
