/*
 * Database structure for employer email submissions
 * This is a C structure example - for web applications, consider using:
 * - Formspree (easiest, no backend)
 * - Firebase/Supabase (backend-as-a-service)
 * - Node.js/Python backend with database
 */

#include <stdio.h>
#include <string.h>
#include <time.h>

#define MAX_NAME_LEN 255
#define MAX_EMAIL_LEN 255
#define MAX_COMPANY_LEN 255
#define MAX_MESSAGE_LEN 1000

// Structure for employer submission data
typedef struct {
    int id;
    char name[MAX_NAME_LEN];
    char email[MAX_EMAIL_LEN];
    char company[MAX_COMPANY_LEN];
    char message[MAX_MESSAGE_LEN];
    time_t timestamp;
    char status[50];  // "new", "contacted", "hired"
} EmployerSubmission;

// Example: Create a new submission
EmployerSubmission create_submission(const char* name, const char* email, 
                                     const char* company, const char* message) {
    EmployerSubmission submission;
    static int next_id = 1;
    
    submission.id = next_id++;
    strncpy(submission.name, name, MAX_NAME_LEN - 1);
    strncpy(submission.email, email, MAX_EMAIL_LEN - 1);
    strncpy(submission.company, company ? company : "", MAX_COMPANY_LEN - 1);
    strncpy(submission.message, message ? message : "", MAX_MESSAGE_LEN - 1);
    submission.timestamp = time(NULL);
    strcpy(submission.status, "new");
    
    return submission;
}

// Example: Print submission (for debugging)
void print_submission(const EmployerSubmission* submission) {
    printf("ID: %d\n", submission->id);
    printf("Name: %s\n", submission->name);
    printf("Email: %s\n", submission->email);
    printf("Company: %s\n", submission->company);
    printf("Message: %s\n", submission->message);
    printf("Timestamp: %ld\n", submission->timestamp);
    printf("Status: %s\n", submission->status);
}

/*
 * NOTE: For a web application, you would typically:
 * 1. Use a web framework (like libmicrohttpd for C, or better yet, use Node.js/Python)
 * 2. Connect to a database (PostgreSQL, MySQL, SQLite)
 * 3. Create REST API endpoints to handle form submissions
 * 
 * Recommended approach: Use Formspree or Firebase instead of building a C backend
 * for web forms, as they're much simpler and more appropriate for web applications.
 */

