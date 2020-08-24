import { fakeEstablishments } from './entities/establishments';
import { fakeUsers } from './entities/users';
import { fakeTransactions } from './entities/transactions';
import { connection } from './../connection';

connection()
fakeEstablishments();
fakeUsers();
fakeTransactions();