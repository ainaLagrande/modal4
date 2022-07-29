# HRNet Modal

## Install

```bash
npm i modal-14-hrnet
```

## Usage

```jsx
import Modal from 'modal-14-hrnet';

function Example() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Modal
      setOpen={setModalIsOpen}
      message='Employee created'
      buttonText='Close'
    />
  )
}
```
