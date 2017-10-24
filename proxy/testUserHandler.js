/**
 * Created by zhengcaiyun on 2017/10/24.
 */
import { testUser } from '../model/testUsers';

let now = new Date().getTime();
export const  testUserHandler = {
    add: () => {
        testUser.create({
            id: 'g-' + now,
            userName: 'Gaffey',
            passWord: '12345',
        })
    },
    query: () => {
        return testUser.findAll({
            where: {
                userName: 'root'
            }
        });
    }
}
