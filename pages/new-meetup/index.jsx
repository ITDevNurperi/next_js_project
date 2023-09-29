import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import React from 'react';

const NewMeetupPage = () => {
    const router = useRouter()
  async  function addNewMeetup(data) {
       const response = await fetch('/api/new-meetup', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json"
        }
       })
       const result = await response.json()
       console.log(result);
       router.push('/')
    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addNewMeetup}/>
        </div>
    );
};

export default NewMeetupPage;