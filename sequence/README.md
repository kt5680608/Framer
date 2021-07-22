# sequence

## sequence
> 한가지 속성으로만 동작하는 애니메이션이 아닌 다중 동작이 섞이거나 나열된 애니메이션의 경우 sequence를 만들어 사용하면 효율적임.

## useAnimation
> useAnimation은 복잡한 다중 시퀀스를 만들때 사용하는 Hook임.

> AnimationControls의 start와 stop 메서드를 사용할 수 있음

``` 
sequence.start({
  x: "100%,
  backgroundColor: ##E83845;
  transition: {duration: 1},
})
```

또는 이와 같이 생성된 variants를 사용할 수도 있음

```
sequence.start("hidden")
```

## async, await

> 순차적으로 애니메이션이 나열되는 sequence를 만들때 비동기 처리가 중요함

```
async function sequence() {
    await animation.start({ rotate: 90 })
    await animation.start({ scale: 1.5 })
    await animation.start({ rotate: -0 })
    animation.start ({ scale: 1 })    
  }
```

![sequence](https://user-images.githubusercontent.com/58690483/126625282-b8cf78f0-1386-497d-afc9-a4089a8edef8.gif)



