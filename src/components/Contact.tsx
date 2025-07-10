'use client'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "devamansingh26@gmail.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="p-8">
      <div className="max-w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Connect With Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Let's collaborate on your next project</p>
        </div>
        
        {/* Email Card */}
        <div className="bg-white dark:bg-[#161b22] p-4 mb-6 rounded-lg border border-gray-200 dark:border-[#30363d] flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <svg className="w-5 h-5 mr-3 text-gray-800 dark:text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 11.87-1.44L12 11l6.73-4.19a.85.85 0 11.87 1.44z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base break-all">{email}</span>
          </div>
          <button 
            onClick={copyEmail}
            className="w-full sm:w-auto px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center"
          >
            {copied ? (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </span>
            ) : (
              'Copy Email'
            )}
          </button>
        </div>
        
        {/* Social Icons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <a 
            href="https://github.com/Amancodes26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#161b22] p-4 rounded-lg border border-gray-200 dark:border-[#30363d] text-center hover:border-blue-500 transition-colors flex flex-col items-center justify-center"
          >
            <svg className="w-6 h-6 mb-2 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-gray-600 dark:text-gray-300">GitHub</div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aman-singh-2026s/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#161b22] p-4 rounded-lg border border-gray-200 dark:border-[#30363d] text-center hover:border-blue-500 transition-colors flex flex-col items-center justify-center"
          >
            <svg className="w-6 h-6 mb-2 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <div className="text-sm text-gray-600 dark:text-gray-300">LinkedIn</div>
          </a>
          
          <a 
            href="https://cal.com/devaman26/15min?user=devaman26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#161b22] p-4 rounded-lg border border-gray-200 dark:border-[#30363d] text-center hover:border-blue-500 transition-colors flex flex-col items-center justify-center"
          >
            <svg className="w-6 h-6 mb-2 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
            </svg>
            <div className="text-sm text-gray-600 dark:text-gray-300">Schedule Call</div>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Aman. All rights reserved.
        </div>
      </div>
    </section>
  )
}
