# Aim BuddyList Exporter
These little snippets work together to export your [AIM.com](https://aim.com/) Buddy List into a nice human readable format (saved as HTML).

## Usage

0. Use modern chrome/firefox
1. Go to [aim.com](https://aim.com/) and login
2. In your buddy list on the left, open up all the groups you want to export the buddies from
3. Open the developer tools console, and copy paste the contents of `get-aim-list.js`. You should see the message "Ready to log". If not, try reloading the page and trying again.
4. Slowly scroll down all the way to the bottom of your list.
5. When you're done, type `done()` into the console.
6. Now you can type `items.length` into the console to see how many items (groups and buddies) are ready to be exported
7. Now copy paste the contents of `present-list.js` into the same console
8. Viola!
9. You can now go to `File > Save As` (in chrome/firefox) and save the webpage

## Note

I noticed that tomorrow, December 15th 2017 (ie. midnight tonight) was the day AIM was [being discontinued](https://help.aol.com/articles/aim-discontinued), so I set out to export my buddy list, and it was trickier than expected, so I wrote a convenient helper script, and began to make a nifty chrome extension for it but abandoned that ordeal because AIM shut down according to 12am EST, not PST (actually ~10 minutes prior). So really you can never run this unless you have a saved copy of the actual old AIM.com page with your buddy list open. Sorry for that.

## License
MIT. Made in the Valley with broken :hearts:
