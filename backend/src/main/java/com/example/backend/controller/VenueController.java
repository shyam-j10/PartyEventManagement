package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Venue;
import com.example.backend.service.VenueService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/v1/auth/venues")
public class VenueController {
    @Autowired
    VenueService service;

    @PostMapping("")
    public boolean addVenue(@RequestBody Venue venue) {
        return service.addVenue(venue);
    }

    @GetMapping("")
    public List<Venue> getAllVenues() {
        return service.getAllVenues();
    }

    @GetMapping("/{id}")
    public Optional<Venue> getVenueById(@PathVariable int id) {
        return service.getVenueById(id);
    }

    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable int id){
        return service.deleteById(id);
    }

    
    

    
    
}
