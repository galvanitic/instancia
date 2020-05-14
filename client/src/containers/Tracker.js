import { connect } from "react-redux";
import Tracker from '../components/Tracker';
import { chLang, fetchSirens, fetchSiren, addSiren, loaderOn, loaderOff } from "../redux/actions";

const mapStateToProps = state => {
  return {
    language: state.language,
    loader: state.loader,
    sirens: state.sirens
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chLang: (lang_id) => dispatch(chLang(lang_id)),
    loaderOn: () => dispatch(loaderOn()),
    loaderOff: () => dispatch(loaderOff()),
    fetchSirens: () => dispatch(fetchSirens()),
    fetchSiren: (siren_id) => dispatch(fetchSiren(siren_id)),
    addSiren: (siren) => dispatch(addSiren(siren))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracker)