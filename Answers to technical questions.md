## How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

- Around 2-3 hours max, out of my total 4 hours. I get back from work late and because I have to get up for work in the morning, I cannot utilize the 24 hours.
- If I had more time, I would add a feature to actually visit the restaurant website by clicking a button underneath the image.
- I would also add more tests, because testing is very important in pre and post production. It gives me a lot of relief writing tests as well, because
- I can rest easy knowing a lot of base cases and scenarios have been tested for. I would add tests for the Forms and Restaurants to make sure the divs actually show. 
- I also would test the async for App.jsx. The problem was that I was having problem using jest/enzyme on my computer, and spent most time debugging that, however I already knew the scripts to write for testing the async and the App.jsx component.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- The most useful feature was most likely fetch, which called the api using async task. It also allows for the response to be converted to json which is nice. Code snippet below:

```javascript
 const api_call = await fetch(
        `http://opentable.herokuapp.com/api/restaurants?city=${city}`
      );
      const response = await api_call.json();
      console.log(response);
```

Another nice feature was preventDefault(). This prevented the page from refreshing everytime the api was called, which saves me a lot of trouble when needing to call this api through a button press. 
Code: ```e.preventDefault();```
 
## How would you track down a performance issue in production? Have you ever had to do this?

- I've done this for my android app and my java application. Generally, there would be tools/libraries to check the speed performance of some type of code. 
- I would also use my knowledge of time/space complexity to get an approximation of the different parts of the code to point out any obvious performance issues. Otherwise, I would create tools myself to check the performance issues.

## How would you improve the API that you just used?

- The API has duplicate IDs which I would remove. More so, I would also like the api sorted, either by name or even better, longitude/latitude. 
- This would provide better utility of the API by developers to provide an excellent experience for the customer/user.
