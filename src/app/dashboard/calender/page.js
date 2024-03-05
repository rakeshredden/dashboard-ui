import Layout from '../layout/Layout';
import EventCalendar from '../components/widgets/EventCalendar';


const events = [
  {
    title: 'Event 1',
    start: new Date(2024, 2, 4, 10, 0), 
    end: new Date(2024, 2, 4, 12, 0),
  },
  {
    title: 'Event 2',
    start: new Date(2024, 2, 6, 14, 0),
    end: new Date(2024, 2, 6, 16, 0),
  },
];

export default function Calender() {

  


  return (
    <Layout>
        <h1 className='text-3xl font-semibold capitalize text-gray-900'>Calender</h1>
        <div>
           <EventCalendar events={events}/>
        </div>
    </Layout>
  )
}

