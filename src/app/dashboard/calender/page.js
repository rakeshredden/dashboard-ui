import Layout from '../layout/Layout';
import EventCalendar from '../components/widgets/EventCalendar';


var date = new Date();


const events = [
  {
    title: 'Event 1',
    start: new Date(2024, 2, 4, 10, 0), 
    end: new Date(2024, 2, 4, 12, 0),
    color: '#FFB200',
    bgcolor: '#FFF5CC',
  },
  {
    title: 'Event 2',
    start: new Date(2024, 2, 10, 14, 0),
    end: new Date(2024, 2, 10, 16, 0),
    color: '#02A0FC',
    bgcolor: '#CCF8FE',
  },
  {
    title: 'Event 2',
    start: new Date(2024, 2, 23, 14, 0),
    end: new Date(2024, 2, 23, 16, 0),
    color: '#02A0FC',
    bgcolor: '#CCF8FE',
  },
  {
    title: 'Event 2',
    start: new Date(2024, 2, 6, 14, 0),
    end: new Date(2024, 2, 6, 16, 0),
    color: '#34B53A',
    bgcolor: '#E2FBD7',
  },
  {
    title: 'Event 2',
    start: new Date(2024, 2, 20, 14, 0),
    end: new Date(2024, 2, 20, 16, 0),
    color: '#4339F2',
    bgcolor: '#DAD7FE',
  },
  {
    title: 'Event 2',
    start: new Date(2024, 2, 25, 14, 0),
    end: new Date(2024, 2, 25, 16, 0),
    color: '#4339F2',
    bgcolor: '#DAD7FE',
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

