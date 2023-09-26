import React, { useState, useEffect, useRef } from 'react'
import { collection, getDocs, Timestamp, orderBy, query, where, getDoc, doc } from "firebase/firestore"
import { Grid, Stack, Box, Link } from '@mui/material'
import { db } from "../firebase-config"
import styles from '../styles/Events.module.scss'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import { useLanguageContext } from '../context/LangContext';
import { IoFileTray } from 'react-icons/io5'

export async function getStaticProps(context) {
  let currentDate = new Date();
  const querySnapshot = await getDocs(query(collection(db, "events"), where("startTime", ">", currentDate), orderBy("startTime")));

  let events = [];

  await Promise.all(querySnapshot.docs.map(async(eventDoc) => {
    let event = {};
    event['id'] = eventDoc.id;

    const englishDoc = await getDoc(doc(db, "events", eventDoc.id, "languages", "english"));
    const chineseDoc = await getDoc(doc(db, "events", eventDoc.id, "languages", "chinese"));

    event['english'] = JSON.parse(JSON.stringify(englishDoc.data()));
    event['chinese'] = JSON.parse(JSON.stringify(chineseDoc.data()));
    event['general'] = JSON.parse(JSON.stringify(eventDoc.data()));
    events.push(event);
  }))

 
  return {
    props: {events}, // will be passed to the page component as props
    revalidate: 10
  }
}

function formatTime(timeStamp) {
  const hours = timeStamp.toDate().getHours();
  const mins = timeStamp.toDate().getMinutes();

  let time = "";

  if(hours == 0) {
    time += '12';
  } else if(hours > 12){
    time += hours - 12;
  } else {
    time += hours;
  }

  time += ':';

  if(mins == 0) {
    time += "00";
  } else if(mins < 10){
    time += "0";
    time += mins;
  } else {
    time += mins;
  }
 
  if(hours >= 12){
    time += " PM";
  } else {
    time += " AM";
  }

  return time;
}

function getMonth(month) {
  let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return months[month];
}

function EventItem({event}) {
  const lang = useLanguageContext().language ? 'english' : 'chinese';

  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    observer.observe(domRef.current);
  }, []);

  const startTimestamp = new Timestamp(parseInt(event.general.startTime.seconds),parseInt(event.general.startTime.nanoseconds));
  const endTimestamp = new Timestamp(parseInt(event.general.endTime.seconds),parseInt(event.general.endTime.nanoseconds));
  
  return (
    <Box ref={domRef}>
      <Grid container direction="row" className={`${styles.eventContainer} ${styles.fadeInSection} ${isVisible ? styles.isVisible : styles.fadeInSection}`}>
        <Grid container item xs="auto" className={styles.eventDateBox} justifyContent="center" direction="column">
          <p className={styles.eventDateMonth}>{getMonth(startTimestamp.toDate().getMonth())}</p>
          <p className={styles.eventDateDate}>{startTimestamp.toDate().getDate()}</p>
        </Grid> 
        <Grid container item xs className={styles.eventContentBox} spacing={1}>
          <Grid container item xs="auto" alignItems="flex-end" sx={{maxWidth:'100%'}}>
            <p className={styles.eventName}>{event[lang].eventName}</p>
          </Grid>
          <Grid container item xs="auto" alignItems="flex-end">
            <div className={styles.eventTimeBox}>
              <p className={styles.eventTime}>{`${formatTime(startTimestamp)} - ${formatTime(endTimestamp)} EST`}</p>
            </div>
          </Grid>
          <Grid container item xs={12} alignItems="flex-start">
            <p className={styles.eventDetails}>{event[lang].details}</p>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function Events({events}) {
  const isEng = useLanguageContext().language;

  let titleText = "Upcoming Events";
  let subtitleText = "Aside from regular lessons, our organization also hosts informational seminars for extra-motivated students, as well as free trial lessons if you are unsure about committing to a course. Check out our upcoming events below! ";
  let eventsText = "Events";
  let noEventsText = "No Upcoming Events";
  let recordingLinkText = "Watch the University Seminar recording here!";
  
  if(!isEng) {
    titleText = "免费活动";
    subtitleText = "除了常规课程外，我们还会组织下列免费试听课和公开讲座。";
    eventsText = '事件';
    noEventsText = '没有正在进行的活动';
    recordingLinkText = "请点击这里观看怎么申请大学的讲座的录像";
  }
 

  const eventItems = events.map((event) => 
    <EventItem event={event} key={event.id}/>
  );

  return (
    <>
      <Head>
        <title>{eventsText}</title> 
        <meta name="description" content="Students to Students Tutoring Website - Events" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Navbar></Navbar>

      <section class="antialiased mt-10">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
        {titleText}
      </h2>

      <div class="mt-4">
        <a href="#" title=""
          class="inline-flex items-center text-sm font-medium text-primary-300">
          {subtitleText}
        </a>
      </div>
    </div>

    <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
      <div class="-my-4 divide-y divide-gray-200">
        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right">
            08:00 - 09:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Opening remarks</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right">
            09:00 - 10:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Bergside LLC: Controlling the video traffic flows</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            10:00 - 11:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            11:00 - 12:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Coffee Break</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            12:00 - 13:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Scaling your brand from €0 to multimillion euros</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            13:00 - 14:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Updates from the Open Source Multimedia community</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            14:00 - 15:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Exploring the balance between customer acquisition and retention</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            15:00 - 16:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Flowbite - An Open Framework for Forensic Watermarking</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            16:00 - 14:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Scaling your brand from €0 to multimillion euros</a>
          </h3>
        </div>

        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
            17:00 - 14:00
          </p>
          <h3 class="text-lg font-semibold text-gray-900">
            <a href="#" class="hover:underline">Drinks & networking</a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
