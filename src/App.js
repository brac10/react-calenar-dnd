import React, { useState } from 'react';
import Timeline from 'react-calendar-timeline';
import moment from 'moment';
import 'react-calendar-timeline/lib/Timeline.css';
import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      group: 1,
      title: 'ISS-05',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'Galaxy 5',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 3,
      group: 3,
      title: 'Galaxy 6',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    // More items...
  ]);

  const [groups, setGroups] = useState([
    { id: 1, title: 'PDS-RME01' },{ id: 2, title: 'PDS-RME03' }, {id: 3, title: 'PDS-RME04'}
    // More groups...
  ]); 
  const onItemClick = ( item, time, e) => {
      console.log("Item Click: You clicked me", item, time);
  }

  const onCanvasDoubleClick = (groupId, time, e) => {
    console.log("Group: You Double Clicked on the canvas: ", groupId, time);
    // Handle double click event
  };

  const onItemMove = (itemId, dragTime, newGroupOrder) => {
    const updatedItems = items.map(item => 
      item.id === itemId ? { ...item, start_time: dragTime, end_time: moment(dragTime).add(1, 'hour') } : item
    );
   console.log("You moved me on canvas: ", itemId, dragTime);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        onCanvasDoubleClick={onCanvasDoubleClick}
        onItemClick={onItemClick}
        onItemMove={onItemMove}
      />
    </DndProvider>
  );
}
export default App;
