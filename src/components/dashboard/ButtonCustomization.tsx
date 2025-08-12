import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Link, Save, X } from 'lucide-react';

interface ButtonConfig {
  id: string;
  name: string;
  link: string;
  isActive: boolean;
  description?: string;
}

const ButtonCustomization: React.FC = () => {
  const [buttons, setButtons] = useState<ButtonConfig[]>([
    {
      id: '1',
      name: 'Book Viewing',
      link: 'https://calendly.com/fivestarrentals',
      isActive: true,
      description: 'Main booking button for property viewings'
    },
    {
      id: '2',
      name: 'Contact Agent',
      link: 'tel:+6420457496',
      isActive: true,
      description: 'Direct phone call to agent'
    },
    {
      id: '3',
      name: 'Email Inquiry',
      link: 'mailto:admin@fivestarrentals.co.nz',
      isActive: true,
      description: 'Send email inquiry'
    }
  ]);

  const [editingButton, setEditingButton] = useState<ButtonConfig | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newButton, setNewButton] = useState({
    name: '',
    link: '',
    description: ''
  });

  const handleEdit = (button: ButtonConfig) => {
    setEditingButton(button);
  };

  const handleSaveEdit = () => {
    if (editingButton) {
      setButtons(prev => prev.map(btn => 
        btn.id === editingButton.id ? editingButton : btn
      ));
      setEditingButton(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingButton(null);
  };

  const handleDelete = (buttonId: string) => {
    if (window.confirm('Are you sure you want to delete this button configuration?')) {
      setButtons(prev => prev.filter(btn => btn.id !== buttonId));
    }
  };

  const handleToggleActive = (buttonId: string) => {
    setButtons(prev => prev.map(btn => 
      btn.id === buttonId ? { ...btn, isActive: !btn.isActive } : btn
    ));
  };

  const handleAddButton = () => {
    if (newButton.name && newButton.link) {
      const button: ButtonConfig = {
        id: Date.now().toString(),
        name: newButton.name,
        link: newButton.link,
        description: newButton.description,
        isActive: true
      };
      setButtons(prev => [...prev, button]);
      setNewButton({ name: '', link: '', description: '' });
      setShowAddForm(false);
    }
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setNewButton({ name: '', link: '', description: '' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-secondary-900">Button Customization</h2>
          <p className="text-secondary-600">Manage button links and settings for your properties</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Button</span>
        </button>
      </div>

      {/* Add Button Form */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">Add New Button</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Button Name *
              </label>
              <input
                type="text"
                value={newButton.name}
                onChange={(e) => setNewButton(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="e.g., Book Viewing"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Button Link *
              </label>
              <input
                type="url"
                value={newButton.link}
                onChange={(e) => setNewButton(prev => ({ ...prev, link: e.target.value }))}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="https://example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Description
              </label>
              <input
                type="text"
                value={newButton.description}
                onChange={(e) => setNewButton(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Optional description"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              onClick={handleCancelAdd}
              className="px-4 py-2 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddButton}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Add Button
            </button>
          </div>
        </motion.div>
      )}

      {/* Buttons List */}
      <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-secondary-200 bg-secondary-50">
          <h3 className="text-lg font-semibold text-secondary-900">Current Button Configurations</h3>
        </div>
        <div className="divide-y divide-secondary-200">
          {buttons.map((button) => (
            <div key={button.id} className="p-6">
              {editingButton?.id === button.id ? (
                // Edit Mode
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Button Name
                      </label>
                      <input
                        type="text"
                        value={editingButton.name}
                        onChange={(e) => setEditingButton(prev => prev ? { ...prev, name: e.target.value } : null)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Button Link
                      </label>
                      <input
                        type="url"
                        value={editingButton.link}
                        onChange={(e) => setEditingButton(prev => prev ? { ...prev, link: e.target.value } : null)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Description
                      </label>
                      <input
                        type="text"
                        value={editingButton.description || ''}
                        onChange={(e) => setEditingButton(prev => prev ? { ...prev, description: e.target.value } : null)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={handleCancelEdit}
                      className="px-4 py-2 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveEdit}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors flex items-center space-x-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-secondary-900">{button.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        button.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {button.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-600 mb-1">
                      <Link className="w-4 h-4" />
                      <span className="text-sm font-mono">{button.link}</span>
                    </div>
                    {button.description && (
                      <p className="text-sm text-secondary-500">{button.description}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleToggleActive(button.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        button.isActive
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {button.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleEdit(button)}
                      className="p-2 text-secondary-600 hover:text-secondary-800 hover:bg-secondary-100 rounded-lg transition-colors"
                      title="Edit Button"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(button.id)}
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-lg transition-colors"
                      title="Delete Button"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Use Button Customization</h3>
        <ul className="space-y-2 text-blue-800 text-sm">
          <li>• <strong>Button Name:</strong> This will be displayed on the button (e.g., "Book Viewing", "Contact Agent")</li>
          <li>• <strong>Button Link:</strong> The URL or action that happens when the button is clicked</li>
          <li>• <strong>Active/Inactive:</strong> Toggle whether the button appears on your properties</li>
          <li>• <strong>Description:</strong> Optional note to help you remember what this button is for</li>
          <li>• <strong>Supported Links:</strong> URLs (https://), phone numbers (tel:), email addresses (mailto:)</li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonCustomization;
