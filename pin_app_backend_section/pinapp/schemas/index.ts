import { PopoverDialog, createSchema } from 'sanity';
import user from './user';
import comment from './comment'
import pin from './pin'
import postedBy from './postedBy'
import save from './save'


export const schemaTypes = [user, pin, comment, postedBy, save]


