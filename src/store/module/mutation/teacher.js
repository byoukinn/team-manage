export default {
    replaceProfile: function(state, data) {
        state.currentProfile = state.members[data.index].profile
    },
}