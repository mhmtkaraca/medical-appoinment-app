"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyBadge = () => {
  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
      <button
        style={{
          backgroundColor: '#0069ff',
          color: '#ffffff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
         
        }}
        onClick={() => {
          const calendlyWidget = document.getElementById('calendly-widget');
          if (calendlyWidget) {
            calendlyWidget.style.display = 'block';
            calendlyWidget.style.width = '70%';
            calendlyWidget.style.height = '70%';
            calendlyWidget.style.margin = 'auto';
    calendlyWidget.style.position = 'fixed';
    calendlyWidget.style.top = '0';
    calendlyWidget.style.left = '0';
    calendlyWidget.style.bottom = '0';
    calendlyWidget.style.right = '0';
          }
        }}
      >
        Book for event
      </button>
      <div
        id="calendly-widget"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '60px',
          right: '20px',
          width: '320px',
          height: '430px',
          backgroundColor: 'white',
          border: '1px solid #ddd',
          borderRadius: '5px',
          zIndex: 1000,
        }}
      >
        <InlineWidget url="https://calendly.com/manage-healthclinicturkiye/manchester-dental-meetup" />
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={() => {
            const calendlyWidget = document.getElementById('calendly-widget');
            if (calendlyWidget) {
              calendlyWidget.style.display = 'none';
            }
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CalendlyBadge;
