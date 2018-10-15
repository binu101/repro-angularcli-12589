# repro-angularcli-12589

This is the reproduction of @angular/cli issue [https://github.com/angular/angular-cli/issues/12589]


## how to
Simply run `npm install` and `ng serve`. Then head to the AppComponent and rename `fromFooBar.renameThisPlease` to anything you like and finally same rename in:  
> ./src/foo/bar/baz.ts  

This should reproduce the error and warning described in the issue mentioned above.