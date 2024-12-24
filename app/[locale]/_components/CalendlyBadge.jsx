"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyBadge = () => {
  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        className="bg-blue-600 text-white border-none p-2 rounded cursor-pointer"
        onClick={() => {
          const calendlyWidget = document.getElementById('calendly-widget');
          if (calendlyWidget) {
            calendlyWidget.style.display = 'block';
            calendlyWidget.style.width = '90%';
            calendlyWidget.style.height = '90%';
            calendlyWidget.style.margin = '20px';
            calendlyWidget.style.position = 'fixed';
            calendlyWidget.style.top = '50%';
            calendlyWidget.style.left = '50%';
            calendlyWidget.style.transform = 'translate(-50%, -50%)';
            calendlyWidget.style.zIndex = '1000';
            calendlyWidget.style.padding = '20px';
          }
        }}
      >
        Book for event
      </button>
      <div
        id="calendly-widget"
        className="hidden fixed bottom-0 right-0 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg"
      >
        <InlineWidget url="https://calendly.com/manage-healthclinicturkiye/manchester-dental-meetup" />
        <button
          className="absolute top-2 right-2 bg-transparent border-none cursor-pointer text-xl"
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