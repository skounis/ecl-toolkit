module.exports = {
  title: 'Date blocks',
  label: 'Date blocks',
  status: 'planned',
  collated: false,
  preview: '@preview-center-transparent',
  tags: ['atom'],
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        slot1_modifier: 'day-text',
        slot1_data: 'Mon',
        slot2_modifier: 'day',
        slot2_data: '21',
        slot3_modifier: 'month',
        slot3_data: 'Oct',
        slot4_modifier: 'day-text',
        slot4_data: 'Mon-Wed',
        slot5_modifier: 'day',
        slot5_data: '04-06',
        slot6_modifier: 'month',
        slot6_data: 'Apr',
      },
    },
    {
      name: 'events',
      label: 'Events',
      context: {
        event_type_1: 'event live-streaming',
        event_type_2: ' event cancelled',
        slot1_modifier: 'day-text',
        slot1_data: 'Mon',
        slot2_modifier: 'day',
        slot2_data: '21',
        slot3_modifier: 'month',
        slot3_data: 'Oct',
        slot4_modifier: 'day-text',
        slot4_data: 'Mon-Wed',
        slot5_modifier: 'day',
        slot5_data: '04-06',
        slot6_modifier: 'month',
        slot6_data: 'Oct',
      },
    },
    {
      name: 'past events',
      label: 'Past events',
      context: {
        event_type_1: 'event past',
        event_type_2: ' event past',
        slot1_modifier: 'day',
        slot1_data: '12',
        slot2_modifier: 'month',
        slot2_data: 'Oct',
        slot3_modifier: 'year',
        slot3_data: '2015',
        slot4_modifier: 'day',
        slot4_data: '04-06',
        slot5_modifier: 'month',
        slot5_data: 'Apr',
        slot6_modifier: 'year',
        slot6_data: '2015',
      },
    },
  ],
};
