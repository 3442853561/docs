(function() {var implementors = {};
implementors['shared_library'] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/local/imp/struct.Key.html' title='std::thread::local::imp::Key'>Key</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/scoped_tls/imp/struct.KeyInner.html' title='std::thread::scoped_tls::imp::KeyInner'>KeyInner</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/struct.Packet.html' title='std::thread::Packet'>Packet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/struct.JoinGuard.html' title='std::thread::JoinGuard'>JoinGuard</a>&lt;'a, T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'a</span>","impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.RawTable.html' title='std::collections::hash::table::RawTable'>RawTable</a>&lt;K, V&gt; <span class='where'>where V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.Iter.html' title='std::collections::hash::table::Iter'>Iter</a>&lt;'a, K, V&gt; <span class='where'>where V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.IterMut.html' title='std::collections::hash::table::IterMut'>IterMut</a>&lt;'a, K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.IntoIter.html' title='std::collections::hash::table::IntoIter'>IntoIter</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.Drain.html' title='std::collections::hash::table::Drain'>Drain</a>&lt;'a, K, V&gt; <span class='where'>where V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.Rawlink.html' title='collections::linked_list::Rawlink'>Rawlink</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/lazy/struct.Lazy.html' title='std::io::lazy::Lazy'>Lazy</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/blocking/struct.Inner.html' title='std::sync::mpsc::blocking::Inner'>Inner</a>","impl !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/blocking/struct.WaitToken.html' title='std::sync::mpsc::blocking::WaitToken'>WaitToken</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/sync/struct.Packet.html' title='std::sync::mpsc::sync::Packet'>Packet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/mpsc_queue/struct.Queue.html' title='std::sync::mpsc::mpsc_queue::Queue'>Queue</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/spsc_queue/struct.Queue.html' title='std::sync::mpsc::spsc_queue::Queue'>Queue</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.SyncSender.html' title='std::sync::mpsc::SyncSender'>SyncSender</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html' title='std::sync::mutex::Mutex'>Mutex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Dummy.html' title='std::sync::mutex::Dummy'>Dummy</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html' title='std::sync::rwlock::RwLock'>RwLock</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.Dummy.html' title='std::sync::rwlock::Dummy'>Dummy</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/mutex/struct.Mutex.html' title='std::sys_common::mutex::Mutex'>Mutex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/poison/struct.Flag.html' title='std::sys_common::poison::Flag'>Flag</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/remutex/struct.ReentrantMutex.html' title='std::sys_common::remutex::ReentrantMutex'>ReentrantMutex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/condvar/struct.Condvar.html' title='std::sys::condvar::Condvar'>Condvar</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/fs/struct.Dir.html' title='std::sys::fs::Dir'>Dir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/mutex/struct.Mutex.html' title='std::sys::mutex::Mutex'>Mutex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/mutex/struct.ReentrantMutex.html' title='std::sys::mutex::ReentrantMutex'>ReentrantMutex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/rwlock/struct.RWLock.html' title='std::sys::rwlock::RWLock'>RWLock</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/thread/struct.Thread.html' title='std::sys::thread::Thread'>Thread</a>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.Drain.html' title='collections::string::Drain'>Drain</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a, T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>",];implementors['log'] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Arc.html' title='alloc::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.Weak.html' title='alloc::arc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/arc/struct.ArcInner.html' title='alloc::arc::ArcInner'>ArcInner</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];implementors['freetype_sys'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='freetype_sys/struct.FT_MemoryRec.html' title='freetype_sys::FT_MemoryRec'>FT_MemoryRec</a>",];implementors['freetype'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='freetype/ffi/struct.FT_MemoryRec.html' title='freetype::ffi::FT_MemoryRec'>FT_MemoryRec</a>",];implementors['wayland_client'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/compositor/struct.Region.html' title='wayland_client::core::compositor::Region'>Region</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/compositor/struct.WSurface.html' title='wayland_client::core::compositor::WSurface'>WSurface</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/output/struct.Output.html' title='wayland_client::core::output::Output'>Output</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/seat/struct.Keyboard.html' title='wayland_client::core::seat::Keyboard'>Keyboard</a>","impl&lt;S: <a class='trait' href='wayland_client/core/trait.Surface.html' title='wayland_client::core::Surface'>Surface</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/seat/struct.Pointer.html' title='wayland_client::core::seat::Pointer'>Pointer</a>&lt;S&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/seat/struct.Touch.html' title='wayland_client::core::seat::Touch'>Touch</a>","impl&lt;S: <a class='trait' href='wayland_client/core/trait.Surface.html' title='wayland_client::core::Surface'>Surface</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/shell/struct.ShellSurface.html' title='wayland_client::core::shell::ShellSurface'>ShellSurface</a>&lt;S&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/shm/struct.Buffer.html' title='wayland_client::core::shm::Buffer'>Buffer</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/shm/struct.ShmPool.html' title='wayland_client::core::shm::ShmPool'>ShmPool</a>","impl&lt;S: <a class='trait' href='wayland_client/core/trait.Surface.html' title='wayland_client::core::Surface'>Surface</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/core/subcompositor/struct.SubSurface.html' title='wayland_client::core::subcompositor::SubSurface'>SubSurface</a>&lt;S&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='wayland_client/egl/struct.EGLSurface.html' title='wayland_client::egl::EGLSurface'>EGLSurface</a>",];implementors['wayland_kbd'] = [];implementors['gfx_device_gl'] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='gfx/device/arc/struct.Arc.html' title='gfx::device::arc::Arc'>Arc</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>",];implementors['glutin'] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/local/imp/struct.Key.html' title='std::thread::local::imp::Key'>Key</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/scoped_tls/imp/struct.KeyInner.html' title='std::thread::scoped_tls::imp::KeyInner'>KeyInner</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/struct.Packet.html' title='std::thread::Packet'>Packet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/thread/struct.JoinGuard.html' title='std::thread::JoinGuard'>JoinGuard</a>&lt;'a, T&gt; <span class='where'>where T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'a</span>","impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.RawTable.html' title='std::collections::hash::table::RawTable'>RawTable</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.Iter.html' title='std::collections::hash::table::Iter'>Iter</a>&lt;'a, K, V&gt; <span class='where'>where V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.IterMut.html' title='std::collections::hash::table::IterMut'>IterMut</a>&lt;'a, K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.IntoIter.html' title='std::collections::hash::table::IntoIter'>IntoIter</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/table/struct.Drain.html' title='std::collections::hash::table::Drain'>Drain</a>&lt;'a, K, V&gt; <span class='where'>where V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a>, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.Rawlink.html' title='collections::linked_list::Rawlink'>Rawlink</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/lazy/struct.Lazy.html' title='std::io::lazy::Lazy'>Lazy</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/blocking/struct.Inner.html' title='std::sync::mpsc::blocking::Inner'>Inner</a>","impl !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/blocking/struct.WaitToken.html' title='std::sync::mpsc::blocking::WaitToken'>WaitToken</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/sync/struct.Packet.html' title='std::sync::mpsc::sync::Packet'>Packet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/mpsc_queue/struct.Queue.html' title='std::sync::mpsc::mpsc_queue::Queue'>Queue</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/spsc_queue/struct.Queue.html' title='std::sync::mpsc::spsc_queue::Queue'>Queue</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.SyncSender.html' title='std::sync::mpsc::SyncSender'>SyncSender</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Mutex.html' title='std::sync::mutex::Mutex'>Mutex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mutex/struct.Dummy.html' title='std::sync::mutex::Dummy'>Dummy</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.RwLock.html' title='std::sync::rwlock::RwLock'>RwLock</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> + ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/rwlock/struct.Dummy.html' title='std::sync::rwlock::Dummy'>Dummy</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/mutex/struct.Mutex.html' title='std::sys_common::mutex::Mutex'>Mutex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/poison/struct.Flag.html' title='std::sys_common::poison::Flag'>Flag</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/remutex/struct.ReentrantMutex.html' title='std::sys_common::remutex::ReentrantMutex'>ReentrantMutex</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/condvar/struct.Condvar.html' title='std::sys::condvar::Condvar'>Condvar</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/fs/struct.Dir.html' title='std::sys::fs::Dir'>Dir</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/mutex/struct.Mutex.html' title='std::sys::mutex::Mutex'>Mutex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/mutex/struct.ReentrantMutex.html' title='std::sys::mutex::ReentrantMutex'>ReentrantMutex</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/rwlock/struct.RWLock.html' title='std::sys::rwlock::RWLock'>RWLock</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/thread/struct.Thread.html' title='std::sys::thread::Thread'>Thread</a>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Weak.html' title='alloc::rc::Weak'>Weak</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.Drain.html' title='collections::string::Drain'>Drain</a>&lt;'a&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.IntoIter.html' title='collections::vec::IntoIter'>IntoIter</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Drain.html' title='collections::vec::Drain'>Drain</a>&lt;'a, T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
