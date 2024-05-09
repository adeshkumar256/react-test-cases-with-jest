import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      [
        {
          name: 'Bruce Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Princess Diana',
        },
      ],
      { status: 200 },
    )
  }),
]
