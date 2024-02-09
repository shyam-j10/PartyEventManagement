package com.example.backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Event {
    @Id
    @Column(name="eid")
    int eid;
   
    String type;
    String link;
    String peop;
    String time;
    String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "venue_id")
    public Venue venue;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    public User user;
    
}
