import BuildTrie from 'action-autocomplete';
import { WordList } from './word_list';
import { WordActions } from './word_actions';
import { SpecialOffers } from './special_offers';

const AutoComplete = BuildTrie(WordList, {
  ...WordActions,
  ...SpecialOffers
});

export {
  AutoComplete
}
