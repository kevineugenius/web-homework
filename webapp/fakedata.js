export var data = {
  'comments': ['This object supplies quick/easy data that conforms to the types',
    'found in transaction-type, user-type, and root-query-type',
    'I spent some time with mongodb and decided to focus on the ',
    'front end as a separate unit.',
    'These comments will also note the history of how I went through the process of my build.'
  ],
  'transactions': [
    {
      'id': 'T01',
      'user_id': 'U01',
      'description': 'Bought tomatoes',
      'merchant_id': 'M01',
      'debit': true,
      'credit': false,
      'amount': 4.87
    },
    {
      'id': 'T02',
      'user_id': 'U02',
      'description': 'Spotify subscription',
      'merchant_id': 'M02',
      'debit': true,
      'credit': false,
      'amount': 9.87
    }
  ],
  'users': [
    {
      'id': 'U01',
      'dob': '1990-01-17',
      'firstName': 'John',
      'lastName': 'Doe',
      'transactions': ['This would be found from a query, so thats what we will do too']
    },
    {
      'id': 'U02',
      'dob': '1987-04-16',
      'firstName': 'Phil',
      'lastName': 'Lieneke',
      'transactions': ['This would be found from a query, so thats what we will do too']
    }
  ]
}
