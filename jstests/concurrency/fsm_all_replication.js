load('jstests/concurrency/fsm_libs/runner.js');

var dir = 'jstests/concurrency/fsm_workloads';

var blacklist = [
    'indexed_insert_multikey.js' // SERVER-16143
].map(function(file) { return dir + '/' + file; });

// SERVER-16196 re-enable executing workloads against replica sets
// runWorkloadsSerially(ls(dir).filter(function(file) {
//     return !Array.contains(blacklist, file);
// }), { replication: true });
