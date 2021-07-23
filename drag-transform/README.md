# framer-drag-transfomr

## useMotionValue

> useMotionValue를 통해 MotionValue를 수동으로 생성할 수 있다.

> 생성된 MotionValue는 다음을 수행할 수 있다.

>> 1. 상태를 설정하고 가져오기
>> 2. 여러 Components들에 전달하여 Components간 모션을 동기화하기
>> 3. useTransform Hook을 통한 MotionValue 체인

## MotionValue
> MotionValue를 생성하면 일반적인 시각 속성을 적용하는 것과 같은 방식으로 Components에 적용할 수 있다
```
  const x = useMotionValue()
  ...
  return <motion.div style = {{ x }}/> 
```
> SVG Components의 경우에는 속성 자체에 직접 적용이 가능하다
```
  const cx = usemotionValue(0)
  ...
  return <motion.circle cx={ cx } />
```

![drag-transform](https://user-images.githubusercontent.com/58690483/126799590-660aea74-abce-4874-b1e9-4e6ebed27b6d.gif)
