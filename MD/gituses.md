# git initial   
**for init our repository**

if we want to init our repository on GIT first we goin
to open our terminal and type: git init
this command its for add GIT in our Project...

```js
    function gitInit (){
        write = 'Git init';
        return write.Terminal
    };
```

If we need to know just the status of ochanged file just nedd to write:


```js
        function gitStatus (){
         write = 'Git status -s';
         return write.Terminal
     };
 ```

If we want to add some files to orepository that we need to do it's so simple:

```js 
    function gitAdd (){
        write = 'Git Add folder/';
        return write.Terminal
    };
 ```

To make a commit we need to write:
            

```js 
    function gitCommit (){
        write = 'Git Commit -m "This is our Main commit"';
        return write.Terminal     
    };
```


## GIT LOG
if we think that someone may made a error in the code or something else so we going to watch our log, so we going to write this on our terminal...

1. git log --oneline
```js
    function gitOneline (){
        write = 'Git log --oneline"';
        return write.Terminal     
    };
```

2. git reset --hard abc123
```js 
    function gitResetVersion (){
        write = 'Git reset --hard asd12';
        return write.Terminal
    };