# HRNet Modal

## Install

```bash
npm i modal-code-hrnet
```

## Usage

```jsx
import Modal from 'modal-code-hrnet';

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
