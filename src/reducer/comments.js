import {  } from '../constants'
import {normalizedComments} from '../fixtures'

export default (commentsState = normalizedComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return commentsState
}