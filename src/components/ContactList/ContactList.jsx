import { selectFilteredContacts } from 'redux/selector';
import { useSelector,useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {
  ListOfContact,
  Container,
  ContactItem,
  Button,
  Paragraph,
} from './ContactList.module';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <Container>
      <ListOfContact>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            <Paragraph>Name: {name}</Paragraph>
            <Paragraph>Tel: {number}</Paragraph>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ListOfContact>
    </Container>
  );
};
