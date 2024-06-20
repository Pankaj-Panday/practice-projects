# Retrieve Movies

This endpoint retrieves a list of movies based on the provided filter criteria.

## Request

- Method: GET
- URL: `http://localhost:3000/api/movies`
- Query Parameters:
  - `name`: (string) The name of the movie to search for.
  - `startYear`: (number) The starting year for the movie release.
  - `endYear`: (number) The ending year for the movie release.
  - `genre`: (string) The genre(s) of the movie. Multiple genres can be provided separated by commas. It is case-sensitive.
  - `rating`: (number) The minimum rating of the movie.
  - `select`: (string) The fields to be included in the response. Multiple fields can be provided separated by commas.
  - `sort`: (string) The field to sort the results by along with the order (asc or desc).
  - `page`: (number) The page number of the results.
  - `limit`: (number) The maximum number of results to return per page.

## Response

- Status: 200
- Content-Type: application/json
- Body:
  ```json
  {
  	"error": true,
  	"data": [
  		{
  			"_id": "",
  			"name": "",
  			"img": "",
  			"year": 0,
  			"genre": [""],
  			"rating": 0,
  			"__v": 0
  		}
  	],
  	"total": 0,
  	"current": 0
  }
  ```

### Example

#### Request

```
GET http://localhost:3000/api/movies?name=a&startYear=2008&endYear=2017&genre=Action,Drama&rating=7&select=name,rating,year&sort=rating,asc&page=1&limit=5

```

#### Response

```json
{
	"error": true,
	"data": [
		{
			"_id": "",
			"name": "",
			"img": "",
			"year": 0,
			"genre": [""],
			"rating": 0,
			"__v": 0
		}
	],
	"total": 0,
	"current": 0
}
```
