import BuildTrie from 'action-autocomplete';
import { WordList } from './word_list';
import { WordActions } from './word_actions';

const AutoComplete = BuildTrie(WordList, WordActions);

export {
  AutoComplete
}
